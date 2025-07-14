---
title: Nickname Templates
description: Learn what options are available for nicknames.
sidebar:
  order: 3
---

:::tip

- All templates require the curly-brackets `{}` around them to work!
- These templates can also be used in places like the join/leave messages, and the verification channel message.
  :::

## Roblox User Templates

| Template         | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `{roblox-name}`  | the user's roblox username (unique)                           |
| `{display-name}` | the user's roblox display name (not unique)                   |
| `{smart-name}`   | (**DEFAULT**) combination of user's username and display name |
| `{roblox-id}`    | the user's roblox ID                                          |
| `{roblox-age}`   | the user's roblox account age (in days)                       |

:::note
`{smart-name}` only shows the username if there is no display name set, or if the combination of display name and username is >28 characters.
Does nothing if the user is not verified.
:::

## Roblox Group Templates

| Template            | Description                                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| `{group-rank}`      | changes to show the rank of the linked group                                                         |
| `{group-rank-<id>}` | changes to show their rank in <u>the given</u> group ID of \<id> <br /> example: `{group-rank-1337}` |
| `{group-url}`       | the bound group url                                                                                  |
| `{group-name}`      | the bound group name                                                                                 |

:::note
These templates, other than `{group-rank-<id>}`, are determined based on the highest bound role the user has.
:::

## Discord User Templates

| Template                | Description                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| `{discord-id}`          | the user's discord user ID                                                 |
| `{discord-mention}`     | changes to ping/mention a user (ex: @Bloxlink)                             |
| `{discord-name}`        | the user's Discord username (unique)                                       |
| `{discord-global-name}` | the user's Discord display name (not unique), falls back to their username |
| `{discord-nick}`        | the user's set nickname, falls back to their username                      |

:::danger
`{discord-nick}` can cause recursive loops where the bot will duplicate the nickname. This template is best
used for the join/leave messages instead of as a proper 'nickname template'.
:::

## Miscellaneous Templates

| Template               | Description                           |
| ---------------------- | ------------------------------------- |
| `{disable-nicknaming}` | makes the bot stop changing nicknames |
| `{prefix}`             | the bot's prefix (`/`)                |
| `{server-name}`        | the server name                       |
| `{verify-url}`         | https://blox.link/verify              |
