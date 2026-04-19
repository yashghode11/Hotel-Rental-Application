
                                
                                //Add your LocationIQ Maps Access Token here (not the API token!)
                                locationiq.key = mapToken;     /* mapToken  show.ejs madhun yet ahe */
 

 
 
                                //Define the map and configure the map's theme
                                var map = new maplibregl.Map({
                                    container: 'map',
                                    style: locationiq.getLayer("Streets"),
                                    zoom: 12,
                                    center: [73.85535000,18.51957000]
                                });

                              

                                //Add a event listener to the language options
                                document.getElementById('lang-options').addEventListener('change', function (event) {
                                    //Get the selected option and it's value
                                    let selection = document.getElementById("lang-options");
                                    let opt = selection.options[selection.selectedIndex];
                                    let language = opt.value;
                                    //Set the map language to selected option
                                    if (language == 'zh') {
                                        //The second parameter when set to 'true' disables the latin alternatives for non-latin languages
                                        map.setLanguage(language, false);
                                    } else {
                                        map.setLanguage(language, true);
                                    }

                                });


                
                             