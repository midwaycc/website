const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="nav-closer"
      dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('click', function (e) {
            if (e.target && e.target.classList && e.target.classList.contains('navigation-link')) {
              document.getElementById('narrow-menu-toggle').checked = false;
              [].forEach.call(document.getElementsByClassName('narrow-submenu-toggle'), function (submenu) {
                submenu.checked = false;
              });
            }
          })
        `
      }}
    />
  ])
}
