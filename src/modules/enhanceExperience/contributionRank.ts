import BaseModule from '../BaseModule'
import { runAtMoment } from '../../types/module'
import BAPI from '../../library/bili-api'
import { useBiliStore } from '../../stores/useBiliStore'
import { Live } from '../../library/bili-api/response'
import { dq } from '../../library/dom'

class ContributionRank extends BaseModule {
    static runOnMultiplePages: boolean = true
    static runAt: runAtMoment = 'window-load'

    config = this.moduleStore.moduleConfig.EnhanceExperience.contributionRank

    private async getContributionRank(): Promise<Live.QueryContributionRank | null> {
        const biliStore = useBiliStore()
        const response = await BAPI.live.queryContributionRank(
            biliStore.BilibiliLive?.ANCHOR_UID ?? 0,
            biliStore.BilibiliLive?.ROOMID ?? 0
        )
        return response
    }

    public run(): void {
        this.logger.log('显示高能用户数量模块开始运行')
        if (this.config.enabled) {
            setInterval(async () => {
                const contributionRankData = await this.getContributionRank()
                const rankTabElement = dq('.tab-list.dp-flex')
                if (rankTabElement && contributionRankData?.code === 0) {
                    rankTabElement.children[0].innerHTML = `高能用户(${contributionRankData.data.count})`
                } else {
                    this.logger.error('获取高能用户数量失败')
                }
            }, 5000)
        }
    }
}

export default ContributionRank
