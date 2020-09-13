 $(document).ready(function () {
     /* for sticky navigation*/
     $('.js--section-features').waypoint(function (direction) {
         if (direction == "down") {
             $('nav').addClass('sticky');
         } else {
             $('nav').removeClass('sticky');

         }

     }, {
         /* to get the sticky navigation started 60px before the element selected starts */
         offset: '60px;'
     });
     /* scroll on buttons*/

     /*I ma hungry button will take to the plan section*/
     $('.js-scroll-to-plan').click(function () {
         $('html, body').animate({
             scrollTop: $('.js-section-plan').offset().top
         }, 1000);
     })

     /*Show me more button will take to the detail section*/
     $('.js-scroll-to-start').click(function () {
         $('html, body').animate({
             scrollTop: $('.js--section-features').offset().top
         }, 1000);
     })
     /*animation1 */
     $('.js--wp--1').waypoint(function (direction) {
         $('.js--wp--1').addClass('animated fadeIn');
     }, {
         offset: '50%'
     });
     /*animation2 */
     $('.js--wp--2').waypoint(function (direction) {
         $('.js--wp--2').addClass('animated fadeInUp');
     }, {
         offset: '50%'
     });
     /*animation3 */
     $('.js--wp--3').waypoint(function (direction) {
         $('.js--wp--3').addClass('animated fadeIn');
     }, {
         offset: '50%'
     });
     /*animation4 */
     $('.js--wp--4').waypoint(function (direction) {
         $('.js--wp--4').addClass('animated animate__bounce');
     }, {
         offset: '50%'
     });
     /*animation5 */
     $('.js--wp--5').waypoint(function (direction) {
         $('.js--wp--5').addClass('animated animate__bounce');
     });
 });