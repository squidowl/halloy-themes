<script lang="ts">
  import '@fontsource/iosevka';
  import _ from 'lodash';

  import type { Theme } from '$lib/types/theme';
  import { randomizeColor } from '$lib/color';

  export let theme: Theme;

  const nickname = (nickname: string): string => {
    let color = theme.buffer?.nickname ?? '#000000';
    return randomizeColor(color, nickname);
  };
</script>

<div
  class="w-full max-w-4xl overflow-hidden rounded-xl border border-gray-700 bg-gray-900 text-sm shadow-lg"
  style="font-family: 'Iosevka', monospace; width: 750px; "
>
  <!-- Window header -->
  <div
    class="flex items-center justify-between px-3 py-2"
    style={`background-color: ${theme.general?.background};`}
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
    style={`background-color: ${theme.general?.background}; color: ${theme.text?.primary};`}
  >
    <!-- Left sidebar -->
    <div class="w-fit" style={`background-color: ${theme.general?.background};`}>
      <div class="p-2" style={`color: ${theme.text?.primary};`}>
        <div class="mb-2 px-2 py-1">liberachat</div>

        <!-- Buffer list -->
        <div class="space-y-1">
          <div class="px-2 py-1">
            <span class="mr-0.5" style={`color: ${theme.general?.unread_indicator};`}>•</span>
            <span>#glirc</span>
          </div>
          <div
            class="rounded px-6 py-1"
            style={`background-color: ${theme.buttons?.primary?.background_selected};`}
          >
            #halloy
          </div>
        </div>
      </div>
    </div>

    <!-- Buffer -->
    <div class="mr-4 mb-4 rounded border" style={`border-color: ${theme.general?.border};`}>
      <!-- Buffer header -->
      <div class="rounded-t p-2" style={`background-color: ${theme.buffer?.background_title_bar};`}>
        <div class="" style={`color: ${theme.text?.secondary};`}>
          #halloy @ liberachat - 111 users
        </div>
      </div>

      <!-- Messages -->
      <div
        class="flex flex-row justify-between p-2"
        style={`background-color: ${theme.buffer?.background};`}
      >
        <div class="flex flex-col-reverse">
          <div>
            <div class="flex flex-row gap-2">
              <span style={`color: ${theme.text?.secondary};`}>[14:39]</span>
              <span style={`color: ${nickname('tarkah')};`}>@tarkah</span>
              <span>gn all o/</span>
            </div>

            <div class="flex flex-row items-center justify-center gap-1">
              <hr
                class="mx-auto h-[1px] w-full border-0"
                style={`background-color: ${theme.general?.border};`}
              />
              <span class="min-w-fit" style={`color: ${theme.text?.secondary};`}>Saturday, March 15</span>
              <hr
                class="mx-auto h-[1px] w-full border-0"
                style={`background-color: ${theme.general?.border};`}
              />
            </div>

            <div class="flex flex-row gap-2">
              <span style={`color: ${theme.text?.secondary};`}>[16:42]</span>
              <span style={`color: ${nickname('Guest5790')};`}>Guest5790</span>
              <span>how do you configure halloy?</span>
            </div>

            <div class="flex flex-row gap-2">
              <span style={`color: ${theme.text?.secondary};`}>[16:54]</span>
              <span style={`color: ${nickname('casperstorm')};`}>@casperstorm</span>
              <span>see <a href="https://halloy.squidowl.org" style={`color: ${theme.buffer?.url};`}>https://halloy.squidowl.org/</a></span>
            </div>

            <div class="flex flex-row gap-2">
              <span style={`color: ${theme.text?.secondary};`}>[16:56]</span>
              <span style={`color: ${nickname('Guest5790')};`}>Guest5790</span>
              <span>thanks a bunch!</span>
            </div>

            <div class="flex flex-row gap-2">
              <span style={`color: ${theme.text?.secondary};`}>[16:55]</span>
              <span style={`color: ${theme.buffer?.server_messages?.default};`}
                >∙ @casperstorm sets mode +o andymandias</span
              >
            </div>

            <div class="flex flex-row gap-2">
              <span style={`color: ${theme.text?.secondary};`}>[16:56]</span>
              <span style={`color: ${nickname('pizzalover')};`}>pizzalover</span>
              <span>anyone have recommendations for good pizza toppings?</span>
            </div>

            <div class="flex flex-row gap-2">
              <span style={`color: ${theme.text?.secondary};`}>[16:56]</span>
              <span style={`color: ${nickname('starfish')};`}>starfish</span>
              <span><span style={`color: ${nickname('pizzalover')};`}>pizzalover</span>: pineapple? XD</span>
            </div>

            <div class="flex flex-row gap-2">
              <span style={`color: ${theme.text?.secondary};`}>[16:56]</span>
              <span style={`color: ${nickname('starfish')};`}>starfish</span>
              <span>jk, i think you should go anchovies</span>
            </div>

            <div class="flex flex-row gap-2">
              <span style={`color: ${theme.text?.secondary};`}>[16:58]</span>
              <span style={`color: ${theme.buffer?.server_messages?.default};`}
                >∙ ⟵ pizzalover has quit</span
              >
            </div>

            <div class="flex flex-row gap-2">
              <span style={`color: ${theme.text?.secondary};`}>[17:10]</span>
              <span style={`color: ${nickname('wanderer')};`}>wanderer</span>
              <span>test - how does this work?</span>
            </div>

            <div class="flex flex-row gap-2">
              <span style={`color: ${theme.text?.secondary};`}>[17:10]</span>
              <span style={`color: ${theme.buffer?.action};`}>∙ wanderer says it works</span>
            </div>

            <div class="flex flex-row gap-2">
              <span style={`color: ${theme.text?.secondary};`}>[18:16]</span>
              <span style={`color: ${nickname('bookworm')};`}>bookworm</span>
              <span>man irc is nice...</span>
            </div>
          </div>
        </div>

        <!-- Nick list -->
        <div class="flex flex-col pl-2">
          {#each ['@casperstorm', '@tarkah', '@andymandias', '+pixelcat', '+bob42', '+musicfan', '+snowdrop', '+qwerty', '+coffeemug', '^teapot^', 'catguy', 'bookworm', 'starfish', 'wanderer'] as user}
            <div style={`color: ${nickname(_.trimStart(user, '@+'))};`}>
              {user}
            </div>
          {/each}
        </div>
      </div>

      <!-- Input area -->
      <div class="rounded pr-2 pb-2 pl-2" style={`background-color: ${theme.buffer?.background};`}>
        <div
          class="rounded p-2"
          style={`background-color: ${theme.buffer?.background_text_input}; color: ${theme.text?.secondary};`}
        >
          Send message...
        </div>
      </div>
    </div>
  </div>
</div>
