import { TelegramSceneType } from "./scene-type";
export type InFn<State> = (context: TelegramSceneType, state: State) => TelegramSceneType['scene']['enter'];
