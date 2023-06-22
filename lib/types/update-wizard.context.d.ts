import { WizardContext } from 'telegraf/typings/scenes';
import { AnyUpdateType } from './any-update.type';
export type UpdateWizardContextType<Update = AnyUpdateType, State = any, Custom = any> = WizardContext & Custom & {
    update: Update;
    scene: {
        state: State;
        session: {
            state: State;
        };
    };
};
