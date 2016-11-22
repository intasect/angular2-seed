module.exports = {
  resources: [
    {
      name: 'shim',
      var: 'shim',
      path: 'core-js/client/shim.min.js'
    },
    {
      name: 'shim-jsmap',
      path: 'core-js/client/shim.min.js.map'
    },
    {
      name: 'reflect',
      var: 'Reflect',
      path: 'reflect-metadata/Reflect.js'
    },
    {
      name: 'reflect-jsmap',
      path: 'reflect-metadata/Reflect.js.map'
    },
    {
      name: 'jquery',
      var: 'jquery',
      path: 'jquery/dist/jquery.min.js'
    },
    {
      name: 'jsBarcode',
      var: 'JsBarcode',
      path: 'jsbarcode/dist/JsBarcode.all.min.js'
    },
    {
      name: 'tether',
      var: 'tether',
      path: 'tether/dist/js/tether.min.js'
    },
    {
      name: 'bootstrap',
      var: 'bootstrap',
      path: 'bootstrap/dist/js/bootstrap.min.js'
    },
    {
      name: 'pdfmake',
      var: 'pdfmake',
      path: './src/shared/assets/js/pdfmake/pdfmake.js'
    },
    {
      name: 'vfs_fonts',
      var: 'vfs_fonts',
      path: './src/shared/assets/js/pdfmake/vfs_fonts.js'
    },
    {
      name: 'bootstrap.css',
      path: 'bootstrap/dist/css/bootstrap.min.css'
    },
    {
      name: 'bootstrap.cssmap',
      path: 'bootstrap/dist/css/bootstrap.min.css.map'
    }
  ]
};
