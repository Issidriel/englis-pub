/*
 * 5 ways to customize the infowindow
 * 2015 - en.marnoto.com
*/

// map center
var center = new google.maps.LatLng(40.589500, -8.683542);

// marker position
var factory = new google.maps.LatLng(40.589500, -8.683542);

function initialize() {
  var mapOptions = {
    center: center,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

  // InfoWindow content
  var content = '<div id="iw-container">' +
                    '<div class="iw-title">Old English Pub<a class="pull-right mapcontact">İletişim <i class="fa fa-refresh" aria-hidden="true"></i></a></div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Hakkımızda</div>' +
                      '<img src="deep/img/Logomain.png" alt="Old English Pub" height="115" width="150">' +
                      "<p>1996 yılında Bağdat Caddesi'nin en merkezi yeri Şaşkınbakkal'da faaliyete geçen Old English Pub, ilk günkü heyecanını günümüze kadar taşımış, eski İngiliz publarının günümüze uyarlanmış halidir. Yenilenen bol seçenekli menüsü içerisine kahvaltıyı da dahil ederek her damak tadına hitap etmeyi amaçlayan restaurantımız; tüm hafta hergün 10.00 – 02.00 saatleri arasında hizmet vermektedir. Bulunduğu konum itibari ile Bağdat Caddesi'ne hakim bir noktada bulunan Old English Pub, kendinizi rahat hissedebileceğiniz ve bu esnada jazz, rock, rock’n roll, blues ve American country şarkılardan oluşan müzikleri dinleyebieleceğiniz, bu esnada güler yüzlü personeli ile en kaliteli hizmeti alabileceğiniz bir mekandır. Buz gibi biralar veya özel olarak hazırlanmış kokteyllerimizden yudumlarken D-Smart maçlarını da seyredebilirsiniz. Rahat ve geniş koltukların bulunduğu iç mekanın yanı sıra balkon kısmından Bağdat Caddesi'nin güzelliğini seyredebilirsiniz. Misafirlerine wi-fi hizmeti de sunan Old English Pub'da size kalan sadece bu eşsiz mekanın tadını çıkarmaktır.</p>"+
                    '</div>'+
                  '</div>';
  var backcontent = '<div class="iw-title">Old English Pub<a class="pull-right mapbase">Hakkımızda <i class="fa fa-refresh" aria-hidden="true"></i></a></div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Adres:</div>' +
                      '<img src="deep/img/Logomain.png" alt="Porcelain Factory of Vista Alegre" height="115" width="150">' +
                      "<p>Bağdat Caddesi Kazım Özalp Sokak 34728 Şaşkınbakkal / İSTANBUL</p>"+
											'<div class="iw-subTitle">Telefon:</div>'+
											'<p>0216 385 25 04</p>'+
											'<div class="iw-subTitle">Fax:</div>'+
											'<p>0216 411 55 48</p>'+
											'<div class="iw-subTitle">E-mail:</div>'+
											'<p>info@oldenglishpub.com.tr</p>'+
                    '</div>';

  // A new Info Window is created and set content
  var infowindow = new google.maps.InfoWindow({
    content: content,

    // Assign a maximum value for the width of the infowindow allows
    // greater control over the various content elements
    maxWidth: 350
  });
   
  // marker options
  var marker = new google.maps.Marker({
    position: factory,
    map: map,
    title:"Fábrica de Porcelana da Vista Alegre"
  });

  // This event expects a click on a marker
  // When this event is fired the Info Window is opened.
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  // Event that closes the Info Window with a click on the map
  google.maps.event.addListener(map, 'click', function() {
    infowindow.close();
  });

  // *
  // START INFOWINDOW CUSTOMIZE.
  // The google.maps.event.addListener() event expects
  // the creation of the infowindow HTML structure 'domready'
  // and before the opening of the infowindow, defined styles are applied.
  // *
  google.maps.event.addListener(infowindow, 'domready', function() {

    // Reference to the DIV that wraps the bottom of infowindow
    var iwOuter = $('.gm-style-iw');

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    */
    var iwBackground = iwOuter.prev();

    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.
    iwOuter.parent().parent().css({left: '115px'});

    // Moves the shadow of the arrow 76px to the left margin.
    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Moves the arrow 76px to the left margin.
    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Changes the desired tail shadow color.
    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    iwCloseBtn.css({opacity: '1', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});
    // New selection for close button
    var newclosebtn = $('.gm-style-iw').next();

    // Apply the desired effect to the close button
    newclosebtn.css({width: '27px', height: '27px', border: '7px solid rgb(72, 128, 13)', 'box-shadow': 'rgb(47, 84, 8) 0px 0px 5px'});
    
    // Add class for animation
    $(".gm-style-iw").on("click", '.mapcontact', function(){
      $('.gm-style-iw').parent().addClass("turn-me-on");
      setTimeout(function() {
      $("#iw-container").html(backcontent); 
      }, 500);
			setTimeout(function() {
      $('.gm-style-iw').parent().removeClass("turn-me-on");; 
      }, 1000);
    })
    // Add class for animation
    $(".gm-style-iw").on("click", ".mapbase", function(){
      $('.gm-style-iw').parent().addClass("turn-me-on");
      setTimeout(function() {
      $("#iw-container").html(content);
      }, 500);
			setTimeout(function() {
      $('.gm-style-iw').parent().removeClass("turn-me-on");; 
      }, 1000);
    })

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if($('.iw-content').height() < 140){
      $('.iw-bottom-gradient').css({display: 'none'});
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });
  });
}
google.maps.event.addDomListener(window, 'load', initialize);