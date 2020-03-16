// Configuration for your app

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'i18n',
      'axios'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons' // optional, you are not bound to it
      // 'ionicons',
      // 'mdi',
      // 'fontawesome'
    ],
    supportIE: true,
    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QActionSheet',
  // 'QAjaxBar',
  'QAlert',
  'QAutocomplete',
  'QBreadcrumbs',
  'QBreadcrumbsEl',
  'QBtn',
  'QBtnDropdown',
  'QBtnGroup',
  'QBtnToggle',
  'QCard',
  'QCardActions',
  'QCardMain',
  'QCardMedia',
  'QCardSeparator',
  'QCardTitle',
  //'QCarousel',
  //'QCarouselControl',
  //'QCarouselSlide',
  'QChatMessage',
  'QCheckbox',
  'QChip',
  'QChipsInput',
  'QCollapsible',
  'QColor',
  'QColorPicker',
  //'QContextMenu',
  'QDatetime',
  'QDatetimePicker',
  'QDialog',
  //'QEditor',
  //'QFab',
  //'QFabAction',
  'QField',
  'QIcon',
  //'QInfiniteScroll',
  'QInnerLoading',
  'QInput',
  'QInputFrame',
  'QItem',
  'QItemMain',
  'QItemSeparator',
  'QItemSide',
  'QItemTile',
  'QItemWrapper',
  //'QKnob',
  'QLayout',
  'QLayoutDrawer',
  'QLayoutFooter',
  'QLayoutHeader',
  'QList',
  'QListHeader',
  'QModal',
  'QModalLayout',
  'QOptionGroup',
  'QPage',
  'QPageContainer',
  'QPageSticky',
  'QPagination',
  //'QParallax',
  'QPopover',
  //'QProgress',
  //'QPullToRefresh',
  'QRadio',
  'QRange',
  //'QRange',
  //'QRating',
  //'QResizeObservable',
  'QRouteTab',
  'QScrollArea',
  'QScrollObservable',
  'QSearch',
  'QSelect',
  'QSlideTransition',
  'QSlider',
  'QSpinner',
  //'QStep',
  //'QStepper',
  //'QStepperNavigation',
  'QTab',
  'QTabPane',
  'QTable',
  'QTableColumns',
  'QTabs',
  'QTd',
  'QTh',
  //'QTimeline',
  //'QTimelineEntry',
  'QToggle',
  'QToolbar',
  'QToolbarTitle',
  'QTooltip',
  'QTr',
  //'QTree',
  'QUploader',
  //'QVideo'
      ],
      directives: [
        'Ripple'
      ],
      // Quasar plugins
      plugins: [
        'Notify'
      ]
      // iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
      // i18n: 'de' // Quasar language
    },
    // animations: 'all' --- includes all animations
    animations: [],
    ssr: {
      pwa: false
    },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
