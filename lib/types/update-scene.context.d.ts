import { SceneContext } from 'telegraf/typings/scenes';
import { AnyUpdateType } from './any-update.type';
export type UpdateSceneContextType<Update = AnyUpdateType, State = any, Custom = any> = SceneContext & Custom & {
    update: Update;
    scene: {
        state: State;
        session: {
            state: State;
        };
    };
};
