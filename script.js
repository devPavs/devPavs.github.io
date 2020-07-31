
function toggle()
{
    document.getElementById('blur').classList.add('active');
    document.getElementById('popup').classList.add('active');
}
function closeToggle()
{
    document.getElementById('blur').classList.remove('active');
    document.getElementById('popup').classList.remove('active');
}
function toggle1()
{
    document.getElementById('blur').classList.add('active');
    document.getElementById('popup1').classList.add('active');
}
function closeToggle1()
{
    document.getElementById('blur').classList.remove('active');
    document.getElementById('popup1').classList.remove('active');
}
function toggle2()
{
    document.getElementById('blur').classList.add('active');
    document.getElementById('popup2').classList.add('active');
}
function closeToggle2()
{
    document.getElementById('blur').classList.remove('active');
    document.getElementById('popup2').classList.remove('active');
}

const showDialog = () => {
    document.getElementById('menu-overlay').classList.toggle('active');
    document.getElementById('overlayid').classList.toggle('active');
    var nav = document.getElementById('menu-overlay');
    nav.style.display = 'block';
    if(document.getElementById('overlayid').classList.contains('active'))
    {
        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        const body = document.body;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
    }
    else
    {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
  };
const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('Provoio').classList.remove('active');
    document.getElementById('overlayid').classList.remove('active');
    document.getElementById('menu-overlay').classList.remove('active');
  }
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });
