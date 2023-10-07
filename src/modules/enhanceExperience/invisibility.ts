import { onFrameTypes, runAtMoment } from '../../types/module'
import { XhrRequestConfig, XhrRequestHandler, proxy } from 'ajax-hook'
import BaseModule from '../BaseModule'
import { unsafeWindow } from '$'

class Invisibility extends BaseModule {
    static runOnMultiplePages: boolean = true
    static runAt: runAtMoment = 'document-start'
    static runAfterDefault: boolean = false
    static onFrame: onFrameTypes = 'all'

    config = this.moduleStore.moduleConfig.EnhanceExperience.invisibility

    public run(): void {
        this.logger.log('隐身入场模块开始运行')
        if (this.config.enabled) {
            proxy(
                {
                    onRequest: (config: XhrRequestConfig, handler: XhrRequestHandler) => {
                        if (
                            config.url.includes(
                                '//api.live.bilibili.com/xlive/web-room/v1/index/getInfoByUser'
                            )
                        ) {
                            config.url = config.url.replace(
                                'not_mock_enter_effect=0',
                                'not_mock_enter_effect=1'
                            )
                            handler.next(config)
                        } else if (
                            config.url.includes(
                                '//live-trace.bilibili.com/xlive/data-interface/v1/x25Kn'
                            )
                        ) {
                            handler.resolve({
                                config: config,
                                status: 200,
                                headers: {
                                    'Content-Type': 'application/json; charset=utf-8'
                                },
                                response: 'ok'
                            })
                        } else {
                            handler.next(config)
                        }
                    }
                },
                unsafeWindow
            )
        }
    }
}

export default Invisibility
