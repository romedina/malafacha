      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 19.4304201, lng: -99.19886129999998},
          zoom: 16,
          scroll:false
        });
                    var marker = new google.maps.Marker({
              position: {lat: 19.4304201, lng: -99.19886129999998},
              map: map,
              title: 'Emilio Castelar 149, Polanco III Secc, 11560  CDMX commonpeople.com.mx 01 55 5281 0800'
               });
      }
       $(".tiendas-dir").html("Emilio Castelar 149, Polanco III Secc, 11560  CDMX commonpeople.com.mx 01 55 5281 0800");

      $( function() {
    $( "#seleccion" ).selectmenu();
 	$( ".selector" ).selectmenu( "open" );

  } );

$( "#seleccion" ).selectmenu({
	change: function( event, ui ) {
			var opcion= ui.item.value;
			switch (opcion)
			{
				case '1' :
			      map = new google.maps.Map(document.getElementById('map'), {
         		 center: {lat: 19.4304201, lng: -99.19886129999998},
        		  zoom: 16
       			 });

            var marker = new google.maps.Marker({
              position: {lat: 19.4304201, lng: -99.19886129999998},
              map: map,
              title: 'Emilio Castelar 149, Polanco III Secc, 11560  CDMX commonpeople.com.mx 01 55 5281 0800'
            });
            $(".tiendas-dir").html("Emilio Castelar 149, Polanco III Secc, 11560  CDMX commonpeople.com.mx 01 55 5281 0800");

				break;
				case '2' :
				 map = new google.maps.Map(document.getElementById('map'), {
         		 center: {lat: 19.4333364, lng: -99.1921982},
        		 zoom: 16
       			 });
              var marker = new google.maps.Marker({
              position: {lat: 19.4333364, lng: -99.1921982},
              map: map,
              title: 'Avenida Horacio 632, Polanco IV Secc, 1155 CDMX compramodanacional.com 044 55 5105 9391'
            });
              $(".tiendas-dir").html("Avenida Horacio 632, Polanco IV Secc, 1155 CDMX compramodanacional.com 044 55 5105 9391");
				break;
				case '3' :
				map = new google.maps.Map(document.getElementById('map'), {
         		 center: {lat: 19.4177993, lng: -99.16333020000002},
        		 zoom: 16
       			 });
        var marker = new google.maps.Marker({
              position: {lat: 19.4177993, lng: -99.16333020000002},
              map: map,
              title: 'Av. Álvaro Obregón 185, Roma Nte., 06700 CDMX fashionlovers.com.mx 01 55 5208 8290'
            });
        $(".tiendas-dir").html("Av. Álvaro Obregón 185, Roma Nte., 06700 CDMX fashionlovers.com.mx 01 55 5208 8290");
				break;
			}
   }
});
