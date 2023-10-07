import { unsafeWindow } from '$'
import { XhrRequestConfig, XhrRequestHandler, proxy } from 'ajax-hook'
import { Iproxy, fproxy } from '../../library/fetch-hook'
import BaseModule from '../BaseModule'
import { getUrlFromFetchInput } from '../../library/utils'
import { onFrameTypes, runAtMoment } from '../../types/module'

class NoReport extends BaseModule {
  static runOnMultiplePages: boolean = true
  static runAt: runAtMoment = 'document-start'
  static onFrame: onFrameTypes = 'all'
  static runAfterDefault: boolean = false

  config = this.moduleStore.moduleConfig.EnhanceExperience.noReport

  /**
   * 判断是否是需要拦截的 URL
   * @param url 需要判断的 URL
   */
  private static isTargetURL(url: string) {
    if (url.includes('//data.bilibili.com') || url.includes('//data.bilivideo.com')) {
      return true
    } else {
      return false
    }
  }

  /**
   * 劫持一些能减少日志上报的方法
   * @param win window
   */
  private hookProperties(win: Window) {
    Object.defineProperty(win.navigator, 'sendBeacon', {
      value: () => {
        return true
      }
    })

    Object.defineProperties(win, {
      reportObserver: {
        get() {
          return {
            reportCustomData: function () {}
          }
        },
        set() {}
      },
      reportConfig: {
        get() {
          return {}
        },
        set() {}
      }
    })
  }

  /**
   * 劫持 XHR 和 fetch 请求
   */
  private async ajaxHook() {
    const ajaxHookProxyConfig = {
      onRequest: (config: XhrRequestConfig, handler: XhrRequestHandler) => {
        if (NoReport.isTargetURL(config.url)) {
          handler.resolve({
            config: config,
            status: 200,
            headers: {
              'Content-Type': 'text/plain; charset=utf-8'
            },
            response: 'ok'
          })
        } else {
          handler.next(config)
        }
      }
    }
    const fetchHookConfig: Iproxy = {
      onRequest(config, handler) {
        const url = getUrlFromFetchInput(config.input)
        if (NoReport.isTargetURL(url)) {
          handler.resolve(new Response('ok'))
        } else {
          handler.next(config)
        }
      },
      onResponse(response, handler) {
        handler.next(response)
      }
    }

    this.hookProperties(unsafeWindow)
    proxy(ajaxHookProxyConfig, unsafeWindow)
    fproxy(fetchHookConfig, unsafeWindow)
  }

  public run() {
    this.logger.log('拦截日志数据上报模块开始运行')
    if (this.config.enabled) {
      try {
        this.ajaxHook()
      } catch (e) {
        this.logger.error('拦截日志数据上报失败', e)
      }
    }
  }
}

export default NoReport
