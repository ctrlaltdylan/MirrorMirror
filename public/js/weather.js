        // Docs at http://simpleweatherjs.com
        var updateWeather = function () {
          $.simpleWeather({
            location: '',
            woeid: '1105779',
            unit: 'c',
            success: function(weather) {
                var skycons = new Skycons({"color": "white"});

                  html = '<canvas id="weather-icon" width="128" height="128"></canvas><h2> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
                  html += '<div id="region">'+weather.city+', '+weather.region+'</div>';
                  html += '<div>'+weather.currently+'</div>';
                  html += '<div>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</div>';
                  html += '<div><i class="fa fa-angle-up"></i>  High '+weather.high + ' <i class="fa fa-angle-down"></i>  Low ' + weather.low + '</div>'
                  $("#weather").html(html);

                 switch(parseInt(weather.code)) {
                    case 0:
                        var animation = 'sleet';
                        break;
                    case 1:
                        var animation = 'sleet';
                        break;
                    case 2:
                        var animation = 'sleet';
                        break;
                     case 3:
                        var animation = 'sleet';
                        break;                       
                     case 4:
                        var animation = 'sleet';
                        break;
                     case 5:
                        var animation = 'snow';
                        break;
                     case 6:
                        var animation = 'snow';
                        break;
                     case 7:
                        var animation = 'snow';
                        break;
                     case 8:
                        var animation = 'snow';
                        break;
                     case 9:
                        var animation = 'rain';
                        break;
                     case 10:
                        var animation = 'snow';
                        break;
                     case 11:
                        var animation = 'rain';
                        break;
                     case 12:
                        var animation = 'rain';
                        break;
                     case 13:
                        var animation = 'snow';
                        break; 
                     case 14:
                        var animation = 'snow';
                        break;
                     case 15:
                        var animation = 'snow';
                        break;
                     case 16:
                        var animation = 'snow';
                        break;
                     case 17:
                        var animation = 'sleet';
                        break;
                     case 18:
                        var animation = 'sleet';
                        break;
                     case 19:
                        var animation = 'fog';
                        break;
                     case 20:
                        var animation = 'fog';
                        break;
                     case 21:
                        var animation = 'fog';
                        break;
                     case 22:
                        var animation = 'fog';
                        break;
                     case 23:
                        var animation = 'wind';
                        break;
                     case 24:
                        var animation = 'wind';
                        break;
                     case 25:
                        var animation = 'cloudy';
                        break;
                    case 26:
                        var animation = 'cloudy';
                        break; 
                     case 27:
                        var animation = 'partly-cloudy-night';
                        break;
                     case 28:
                        var animation = 'partly-cloudy-day';
                        break;
                     case 29:
                        var animation = 'partly-cloudy-night';
                        break;
                     case 30:
                        var animation = 'partly-cloudy-day';
                        break;
                     case 31:
                        var animation = 'clear-night';
                        break;
                     case 32:
                        var animation = 'clear-day';
                        break;
                     case 33:
                        var animation = 'clear-night';
                        break;
                     case 34:
                        var animation = 'clear-day';
                        break;
                     case 35:
                        var animation = 'sleet';
                        break;
                     case 36:
                        var animation = 'clear-day';
                        break;
                     case 37:
                        var animation = 'sleet';
                        break;
                     case 38:
                        var animation = 'sleet';
                        break;
                     case 39:
                        var animation = 'sleet';
                        break;
                     case 40:
                        var animation = 'rain';
                        break;
                     case 41:
                        var animation = 'snow';
                        break;
                     case 42:
                        var animation = 'snow';
                        break;
                     case 43:
                        var animation = 'snow';
                        break;
                     case 44:
                        var animation = 'partly-cloudy-day';
                        break;
                     case 45:
                        var animation = 'sleet';
                        break;
                     case 46:
                        var animation = 'snow';
                        break;
                     case 46:
                        var animation = 'sleet';
                        break;                
                    default:
                        var animation = 'clear-day';
                } 

                  skycons.remove('weather-icon')
                  // you can add a canvas by it's ID...
                  console.log(animation);
                  skycons.add("weather-icon", animation);

                  // ...or by the canvas DOM element itself.

                  // if you're using the Forecast API, you can also supply
                  // strings: "partly-cloudy-day" or "rain".

                  // start animation!
                  skycons.play();
            },
            error: function(error) {
              $("#weather").html('<p>'+error+'</p>');
            }
          });
        };
        $(document).ready(function() {
            updateWeather();
            setInterval(updateWeather, 300000);
        });
