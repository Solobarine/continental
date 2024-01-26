import { defineStore } from 'pinia'

const useSettingsStore = defineStore('settings', {
  state: () => ({
    main_menu_collapse: false,
    theme: 'light',
    messages_menu_collapse,
    settings_menu_collapse: false,
  }),
  actions: {
    toggleMainMenu() {
      this.main_menu_collapse = !this.main_menu_collapse
    },
    toggleMessagesMenu() {
      this.messages_menu_collapse = !this.messages_menu_collapse
    },
    toggleSettingsMenu() {
      this.settings_menu_collapse = !this.settings_menu_collapse
    },
  },
})

export { useSettingsStore }
