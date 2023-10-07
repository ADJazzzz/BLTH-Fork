type moduleStatus = 'running' | 'done' | 'error' | ''

interface ImoduleStatus {
    DailyTasks: {
        MainSiteTasks: {
            login: moduleStatus
            watch: moduleStatus
            coin: moduleStatus
            share: moduleStatus
        }
        LiveTasks: {
            sign: moduleStatus
            medalTasks: {
                danmu: moduleStatus
                watch: moduleStatus
            }
        }
        OtherTasks: {
            groupSign: moduleStatus
            silverToCoin: moduleStatus
            coinToSilver: moduleStatus
            getYearVipPrivilege: moduleStatus
        }
    }
}

type runAtMoment =
    | 'document-start'
    | 'document-head'
    | 'document-body'
    | 'document-end'
    | 'window-load'

type onFrameTypes = 'all' | 'target' | 'top'

type isOnTargetFrameTypes = 'unknown' | 'yes'

type moduleEmitterEvents = {
    Default_FansMedals: {
        module: string
    }
}

export {
    moduleStatus,
    ImoduleStatus,
    runAtMoment,
    moduleEmitterEvents,
    onFrameTypes,
    isOnTargetFrameTypes
}
