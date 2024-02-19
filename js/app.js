// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
  
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');
  
      if (!groupHeader) return;
  
      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');
  
      // Toggle icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
  
      // Toggle visibility of body
      groupBody.classList.toggle('open');
  
      // Close other open FAQ bodies
      const otherGroups = faqContainer.querySelectorAll('.faq-group');
  
      otherGroups.forEach((otherGroup) => {
        if (otherGroup !== group) {
          const otherGroupBody = otherGroup.querySelector('.faq-group-body');
          const otherIcon = otherGroup.querySelector('.faq-group-header i');
  
          otherGroupBody.classList.remove('open');
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
        }
      });
    });
  });
  
  // Mobile Menu
  document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
      mobileMenu.classList.toggle('active')
    );
  });

  // Sticky Navbar
  window.addEventListener("scroll", ()=>{
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky", window.scrollY > 0);
  })
  

  // whatsapp
    var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?29174';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var options = {
  "enabled":true,
  "chatButtonSetting":{
      "backgroundColor":"#4dc247",
      "ctaText":"",
      "borderRadius":"25",
      "marginLeft":"0",
      "marginBottom":"50",
      "marginRight":"50",
      "position":"right"
  },
  "brandSetting":{
      "brandName":"",
      "brandSubTitle":"",
      "brandImg":"https://w7.pngwing.com/pngs/405/859/png-transparent-building-cartoon-facade-building-service-condominium-apartment-thumbnail.png",
      "welcomeText":"Welcome to SmartSignal",
      "messageText":"",
      "backgroundColor":"#0a5f54",
      "ctaText":"Start Chat",
      "borderRadius":"25",
      "autoShow":false,
      "phoneNumber":"+918748967695"
  }
};
    s.onload = function() {
        CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);