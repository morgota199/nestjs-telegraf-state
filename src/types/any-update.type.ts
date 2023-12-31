import { Update } from 'telegraf/typings/core/types/typegram';

export type AnyUpdateType = Update.CallbackQueryUpdate &
  Update.ChannelPostUpdate &
  Update.ChatMemberUpdate &
  Update.ChosenInlineResultUpdate &
  Update.EditedChannelPostUpdate &
  Update.EditedMessageUpdate &
  Update.InlineQueryUpdate &
  Update.MessageUpdate &
  Update.MyChatMemberUpdate &
  Update.PreCheckoutQueryUpdate &
  Update.PollAnswerUpdate &
  Update.PollUpdate &
  Update.ShippingQueryUpdate &
  Update.ChatJoinRequestUpdate;
