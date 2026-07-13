/** Stable permission matrix structure — resolve labels via space namespace keys. */

export type PermissionChannelKind = "text" | "voice" | "category";

export interface PermissionItemDef {
  flag: string;
  labelKey: string;
  descriptionKey: string;
}

export interface PermissionGroupDef {
  id: string;
  titleKey: string;
  items: PermissionItemDef[];
}

export interface ChannelPermissionGroupDef extends PermissionGroupDef {
  channelTypes: PermissionChannelKind[];
}

export const spacePermissionGroups: PermissionGroupDef[] = [
  {
    id: "general",
    titleKey: "roles.permissions.groups.general",
    items: [
      {
        flag: "ViewChannel",
        labelKey: "roles.permissions.flags.ViewChannel.label",
        descriptionKey: "roles.permissions.flags.ViewChannel.description",
      },
      {
        flag: "ManageChannels",
        labelKey: "roles.permissions.flags.ManageChannels.label",
        descriptionKey: "roles.permissions.flags.ManageChannels.description",
      },
      {
        flag: "ManageRoles",
        labelKey: "roles.permissions.flags.ManageRoles.label",
        descriptionKey: "roles.permissions.flags.ManageRoles.description",
      },
      {
        flag: "CreateExpressions",
        labelKey: "roles.permissions.flags.CreateExpressions.label",
        descriptionKey: "roles.permissions.flags.CreateExpressions.description",
      },
      {
        flag: "ManageExpressions",
        labelKey: "roles.permissions.flags.ManageExpressions.label",
        descriptionKey: "roles.permissions.flags.ManageExpressions.description",
      },
      {
        flag: "ManageSpace",
        labelKey: "roles.permissions.flags.ManageSpace.label",
        descriptionKey: "roles.permissions.flags.ManageSpace.description",
      },
    ],
  },
  {
    id: "membership",
    titleKey: "roles.permissions.groups.membership",
    items: [
      {
        flag: "CreateInvites",
        labelKey: "roles.permissions.flags.CreateInvites.label",
        descriptionKey: "roles.permissions.flags.CreateInvites.description",
      },
      {
        flag: "KickMembers",
        labelKey: "roles.permissions.flags.KickMembers.label",
        descriptionKey: "roles.permissions.flags.KickMembers.description",
      },
      {
        flag: "BanMembers",
        labelKey: "roles.permissions.flags.BanMembers.label",
        descriptionKey: "roles.permissions.flags.BanMembers.description",
      },
    ],
  },
  {
    id: "text",
    titleKey: "roles.permissions.groups.text",
    items: [
      {
        flag: "SendMessages",
        labelKey: "roles.permissions.flags.SendMessages.label",
        descriptionKey: "roles.permissions.flags.SendMessages.description",
      },
      {
        flag: "EmbedLinks",
        labelKey: "roles.permissions.flags.EmbedLinks.label",
        descriptionKey: "roles.permissions.flags.EmbedLinks.description",
      },
      {
        flag: "AttachFiles",
        labelKey: "roles.permissions.flags.AttachFiles.label",
        descriptionKey: "roles.permissions.flags.AttachFiles.description",
      },
      {
        flag: "AddReactions",
        labelKey: "roles.permissions.flags.AddReactions.label",
        descriptionKey: "roles.permissions.flags.AddReactions.description",
      },
      {
        flag: "MentionEveryone",
        labelKey: "roles.permissions.flags.MentionEveryone.label",
        descriptionKey: "roles.permissions.flags.MentionEveryone.description",
      },
      {
        flag: "UseExternalEmojis",
        labelKey: "roles.permissions.flags.UseExternalEmojis.label",
        descriptionKey: "roles.permissions.flags.UseExternalEmojis.description",
      },
      {
        flag: "UseExternalStickers",
        labelKey: "roles.permissions.flags.UseExternalStickers.label",
        descriptionKey:
          "roles.permissions.flags.UseExternalStickers.description",
      },
      {
        flag: "ManageMessages",
        labelKey: "roles.permissions.flags.ManageMessages.label",
        descriptionKey: "roles.permissions.flags.ManageMessages.description",
      },
      {
        flag: "ReadMessageHistory",
        labelKey: "roles.permissions.flags.ReadMessageHistory.label",
        descriptionKey: "roles.permissions.flags.ReadMessageHistory.description",
      },
    ],
  },
  {
    id: "voice",
    titleKey: "roles.permissions.groups.voice",
    items: [
      {
        flag: "Connect",
        labelKey: "roles.permissions.flags.Connect.label",
        descriptionKey: "roles.permissions.flags.Connect.description",
      },
      {
        flag: "Speak",
        labelKey: "roles.permissions.flags.Speak.label",
        descriptionKey: "roles.permissions.flags.Speak.description",
      },
      {
        flag: "UseVAD",
        labelKey: "roles.permissions.flags.UseVAD.label",
        descriptionKey: "roles.permissions.flags.UseVAD.description",
      },
      {
        flag: "MuteMembers",
        labelKey: "roles.permissions.flags.MuteMembers.label",
        descriptionKey: "roles.permissions.flags.MuteMembers.description",
      },
      {
        flag: "DeafenMembers",
        labelKey: "roles.permissions.flags.DeafenMembers.label",
        descriptionKey: "roles.permissions.flags.DeafenMembers.description",
      },
      {
        flag: "MoveMembers",
        labelKey: "roles.permissions.flags.MoveMembers.label",
        descriptionKey: "roles.permissions.flags.MoveMembers.description",
      },
    ],
  },
  {
    id: "advanced",
    titleKey: "roles.permissions.groups.advanced",
    items: [
      {
        flag: "Administrator",
        labelKey: "roles.permissions.flags.Administrator.label",
        descriptionKey: "roles.permissions.flags.Administrator.description",
      },
    ],
  },
];

/** Channel overwrite matrix — channel-scoped copy under channels.permissions.* */
export const channelPermissionGroups: ChannelPermissionGroupDef[] = [
  {
    id: "general",
    titleKey: "channels.permissions.groups.general",
    channelTypes: ["text", "voice", "category"],
    items: [
      {
        flag: "ViewChannel",
        labelKey: "channels.permissions.flags.ViewChannel.label",
        descriptionKey: "channels.permissions.flags.ViewChannel.description",
      },
      {
        flag: "ManageChannels",
        labelKey: "channels.permissions.flags.ManageChannels.label",
        descriptionKey: "channels.permissions.flags.ManageChannels.description",
      },
      {
        flag: "ManageRoles",
        labelKey: "channels.permissions.flags.ManageRoles.label",
        descriptionKey: "channels.permissions.flags.ManageRoles.description",
      },
    ],
  },
  {
    id: "text",
    titleKey: "channels.permissions.groups.text",
    channelTypes: ["text", "category"],
    items: [
      {
        flag: "SendMessages",
        labelKey: "channels.permissions.flags.SendMessages.label",
        descriptionKey: "channels.permissions.flags.SendMessages.description",
      },
      {
        flag: "EmbedLinks",
        labelKey: "channels.permissions.flags.EmbedLinks.label",
        descriptionKey: "channels.permissions.flags.EmbedLinks.description",
      },
      {
        flag: "AttachFiles",
        labelKey: "channels.permissions.flags.AttachFiles.label",
        descriptionKey: "channels.permissions.flags.AttachFiles.description",
      },
      {
        flag: "MentionEveryone",
        labelKey: "channels.permissions.flags.MentionEveryone.label",
        descriptionKey: "channels.permissions.flags.MentionEveryone.description",
      },
      {
        flag: "AddReactions",
        labelKey: "channels.permissions.flags.AddReactions.label",
        descriptionKey: "channels.permissions.flags.AddReactions.description",
      },
      {
        flag: "UseExternalEmojis",
        labelKey: "channels.permissions.flags.UseExternalEmojis.label",
        descriptionKey:
          "channels.permissions.flags.UseExternalEmojis.description",
      },
      {
        flag: "UseExternalStickers",
        labelKey: "channels.permissions.flags.UseExternalStickers.label",
        descriptionKey:
          "channels.permissions.flags.UseExternalStickers.description",
      },
      {
        flag: "ManageMessages",
        labelKey: "channels.permissions.flags.ManageMessages.label",
        descriptionKey: "channels.permissions.flags.ManageMessages.description",
      },
      {
        flag: "ReadMessageHistory",
        labelKey: "channels.permissions.flags.ReadMessageHistory.label",
        descriptionKey:
          "channels.permissions.flags.ReadMessageHistory.description",
      },
    ],
  },
  {
    id: "voice",
    titleKey: "channels.permissions.groups.voice",
    channelTypes: ["voice", "category"],
    items: [
      {
        flag: "Connect",
        labelKey: "channels.permissions.flags.Connect.label",
        descriptionKey: "channels.permissions.flags.Connect.description",
      },
      {
        flag: "Speak",
        labelKey: "channels.permissions.flags.Speak.label",
        descriptionKey: "channels.permissions.flags.Speak.description",
      },
      {
        flag: "UseVAD",
        labelKey: "channels.permissions.flags.UseVAD.label",
        descriptionKey: "channels.permissions.flags.UseVAD.description",
      },
      {
        flag: "MuteMembers",
        labelKey: "channels.permissions.flags.MuteMembers.label",
        descriptionKey: "channels.permissions.flags.MuteMembers.description",
      },
      {
        flag: "DeafenMembers",
        labelKey: "channels.permissions.flags.DeafenMembers.label",
        descriptionKey: "channels.permissions.flags.DeafenMembers.description",
      },
      {
        flag: "MoveMembers",
        labelKey: "channels.permissions.flags.MoveMembers.label",
        descriptionKey: "channels.permissions.flags.MoveMembers.description",
      },
    ],
  },
];
