export interface DiscordResponseData {
  type: number
  code: string
  inviter: DiscordResponseDataInviter
  expires_at: any
  flags: number
  guild: DiscordResponseDataGuild
  guild_id: string
  channel: DiscordResponseDataChannel
  approximate_member_count: number
  approximate_presence_count: number
}

export interface DiscordResponseDataInviter {
  id: string
  username: string
  avatar: string
  discriminator: string
  public_flags: number
  flags: number
  banner: any
  accent_color: any
  global_name: string
  avatar_decoration_data: any
  banner_color: any
  clan: any
  primary_guild: any
}

export interface DiscordResponseDataGuild {
  id: string
  name: string
  splash: string
  banner: any
  description: string
  icon: string
  features: string[]
  verification_level: number
  vanity_url_code: any
  nsfw_level: number
  nsfw: boolean
  premium_subscription_count: number
}

export interface DiscordResponseDataChannel {
  id: string
  type: number
  name: string
}
