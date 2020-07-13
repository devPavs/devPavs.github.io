function toggle()
{
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');

}
/*function menuToggle()
{
    var nav = document.getElementById('menu-overlay');
    nav.classList.toggle('active');
}
function CloseThis()
{
    var nav = document.getElementById('menu-overlay');
    nav.style.display = 'none';
    var overlay = document.getElementById('overlayid');
    overlay.style.display = 'none';
}
function Reopen()
{
    var nav = document.getElementById('menu-overlay');
    nav.style.display = 'block';
    var overlay = document.getElementById('overlayid');
    overlay.style.display = 'block';
}*/
const showDialog = () => {
    document.getElementById('menu-overlay').classList.add('active');
    var nav = document.getElementById('menu-overlay');
    nav.style.display = 'block';
    document.getElementById('overlayid').style.overflow = 'visible';
    document.getElementById('overlayid').style.opacity = '1';
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
  };
const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('Provoio').classList.remove('active');
    document.getElementById('menu-overlay').style.display = 'none';
    document.getElementById('overlayid').style.overflow = 'hidden';
    document.getElementById('overlayid').style.opacity = '0';
  }
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });