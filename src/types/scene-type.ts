import { AnyUpdateType } from './any-update.type';
import { UpdateSceneContextType } from './update-scene.context';
import { UpdateWizardContextType } from './update-wizard.context';

export type TelegramSceneType<
  Update = AnyUpdateType,
  State = any,
  Custom = any,
> =
  | UpdateSceneContextType<Update, State, Custom>
  | UpdateWizardContextType<Update, State, Custom>;
