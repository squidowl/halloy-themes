<script lang="ts">
  import type { Theme } from '$lib/theme';

  import _ from 'lodash';
  import { awayAlpha, randomizeColor } from '$lib';

  const { theme }: { theme: Theme } = $props();
  const colors = $derived(theme.colors);

  const nickname = (nickname: string): string => {
    let color = colors.buffer?.nickname ?? '#000000';
    return randomizeColor(color, nickname);
  };

  const away = (): string => {
    let color = colors.buffer?.background ?? '#000000';
    return awayAlpha(color);
  };
</script>

<div
  class="group relative w-full overflow-hidden rounded-lg border border-gray-500 text-sm shadow-lg"
  style={`font-family: 'Iosevka', monospace; --selection-color: ${colors.buffer?.selection};`}
>
  <!-- Window header -->
  <div
    class="flex items-center justify-between px-3 py-2"
    style={`background-color: ${colors.general?.background};`}
  >
    <div class="flex space-x-2">
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
      <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
      <div class="h-3 w-3 rounded-full bg-green-500"></div>
    </div>
    <div class="w-6"></div>
  </div>

  <div
    class="flex"
    style={`background-color: ${colors.general?.background}; color: ${colors.text?.primary};`}
  >
    <!-- Left sidebar -->
    <div class="hidden w-fit md:block" style={`background-color: ${colors.general?.background};`}>
      <div class="p-2" style={`color: ${colors.text?.primary};`}>
        <div
          class="rounded-lg px-6 py-1 hover:bg-[var(--hover-bg-color)] selection-color"
          style={`--hover-bg-color: ${colors.buttons?.primary?.background_hover};`}
        >
          liberachat
        </div>

        <!-- Buffer list -->
        <div class="space-y-1">
          <div
            class="rounded-lg px-6 py-1 hover:bg-[var(--hover-bg-color)] selection-color"
            style={`--hover-bg-color: ${colors.buttons?.primary?.background_hover};`}
          >
            <span class="mr-0.5 selection-color" style={`color: ${colors.general?.unread_indicator};`}>•</span>
            <span class="selection-color">#glirc</span>
          </div>
          <div
            class="rounded-lg px-6 py-1 selection-color"
            style={`background-color: ${colors.buttons?.primary?.background_selected};`}
          >
            <span class="mr-0.5 selection-color" style={`visibility: hidden;`}>•</span>
            <span class="selection-color">#halloy</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Buffer -->
    <div
      class="mr-3 mb-3 ml-3 rounded-lg border"
      style={`border-color: ${colors.buffer?.border_selected};`}
    >
      <!-- Buffer header -->
      <div
        class="rounded-t-lg p-2"
        style={`background-color: ${colors.buffer?.background_title_bar};`}
      >
        <div class="selection-color" style={`color: ${colors.text?.secondary};`}>
          #halloy @ liberachat - 111 users
        </div>
      </div>

      <!-- Messages -->
      <div
        class="flex flex-row justify-between p-2"
        style={`background-color: ${colors.buffer?.background};`}
      >
        <div class="flex flex-col-reverse">
          <div>
            <div class="flex flex-row gap-2">
              <span class="selection-color" style={`color: ${colors.text?.secondary};`}>16:42</span>
              <span class="selection-color" style={`color: ${nickname('Guest5790')};`}>Guest5790</span>
              <span class="selection-color">how do you configure halloy?</span>
            </div>

            <div class="flex flex-row gap-2">
              <span class="selection-color" style={`color: ${colors.text?.secondary};`}>16:54</span>
              <span class="selection-color" style={`color: ${nickname('casperstorm')};`}>@casperstorm</span>
              <span
                ><span style={`color: ${colors.buffer?.url};`}
                  ><a class="hover:underline selection-color" href="https://halloy.chat/">https://halloy.chat/</a></span
                ></span
              >
            </div>

            <div class="flex flex-row gap-2">
              <span class="selection-color" style={`color: ${colors.text?.secondary};`}>16:55</span>
              <span class="selection-color" style={`color: ${colors.buffer?.server_messages?.default};`}
                >∙ @casperstorm sets mode +o andymandias</span
              >
            </div>

            <div class="flex flex-row gap-2">
              <span class="selection-color" style={`color: ${colors.text?.secondary};`}>16:56</span>
              <span class="selection-color" style={`color: ${nickname('pizzalover')};`}>pizzalover</span>
              <span class="selection-color">good pizza toppings?</span>
            </div>

            <div class="flex flex-row gap-2">
              <span class="selection-color" style={`color: ${colors.text?.secondary};`}>16:56</span>
              <span class="selection-color" style={`color: ${nickname('starfish')};`}>starfish</span>
              <span class="selection-color"
                ><span class="selection-color" style={`color: ${nickname('pizzalover')};`}>pizzalover</span>:
                <span class="selection-color" style={`background-color: ${colors.buffer?.highlight};`}>pineapple</span>? XD</span
              >
            </div>

            <div class="flex flex-row gap-2">
              <span class="selection-color" style={`color: ${colors.text?.secondary};`}>16:58</span>
              <span class="selection-color" style={`color: ${colors.buffer?.server_messages?.default};`}
                >∙ ⟵ pizzalover has quit</span
              >
            </div>

            <div class="flex flex-row items-center justify-center gap-1">
              <hr
                class="mx-auto h-[1px] w-full border-0"
                style={`background-color: ${colors.general?.border};`}
              />
              <span class="min-w-fit selection-color" style={`color: ${colors.text?.secondary};`}
                >Saturday, March 15</span
              >
              <hr
                class="mx-auto h-[1px] w-full border-0"
                style={`background-color: ${colors.general?.border};`}
              />
            </div>

            <div class="flex flex-row gap-2">
              <span class="selection-color" style={`color: ${colors.text?.secondary};`}>17:10</span>
              <span class="selection-color" style={`color: ${nickname('coffeemug')};`}>coffeemug</span>
              <span class="selection-color">babe wake up, irc is back</span>
            </div>

            <div class="flex flex-row gap-2">
              <span class="selection-color" style={`color: ${colors.text?.secondary};`}>17:10</span>
              <span class="selection-color" style={`color: ${colors.buffer?.action};`}>∙ coffeemug enjoys halloy</span>
            </div>
          </div>
        </div>

        <!-- Nick list -->
        <div class="hidden flex-col pl-2 sm:block">
          {#each ['@casperstorm', '@tarkah', '@andymandias'] as user}
            <div class="selection-color" style={`color: ${nickname(_.trimStart(user, '@+'))};`}>
              {user}
            </div>
          {/each}
          {#each ['+pixelcat', 'bob42'] as user}
            <div class="selection-color" style={`color: ${nickname(_.trimStart(user, '@+'))}; opacity: ${away()};`}>
              {user}
            </div>
          {/each}
          {#each ['musicfan', 'snowdrop'] as user}
            <div class="selection-color" style={`color: ${nickname(_.trimStart(user, '@+'))};`}>
              {user}
            </div>
          {/each}
          <div class="selection-color" style={`color: ${nickname('qwerty')}; opacity: ${away()};`}>
            qwerty
          </div>
          <div class="selection-color" style={`color: ${nickname('coffeemug')};`}>
            coffeemug
          </div>
        </div>
      </div>

      <!-- Input area -->
      <div
        class="rounded-b-lg pr-2 pb-2 pl-2"
        style={`background-color: ${colors.buffer?.background};`}
      >
        <div
          class="rounded-lg p-2 selection-color"
          style={`background-color: ${colors.buffer?.background_text_input}; color: ${colors.text?.secondary};`}
        >
          Send message...
        </div>
      </div>
    </div>
  </div>
</div>
