
function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1AVijnBgZpuVLi70VZhdoZpTzUalbNjINQZeOl1O2tbo/edit?usp=sharing',
                   callback: function(data, tabletop) { 
                       console.log(data)
                   },
                   simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', init)
