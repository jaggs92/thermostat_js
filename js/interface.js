$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

    $('#temperature-up').click(function() {
        thermostat.up();
        updateTemperature();
    });

    $('#temperature-down').click(function() {
        thermostat.down();
        updateTemperature();
    });

    $('#temperature-reset').click(function() {
        thermostat.resetTemperature();
        updateTemperature();
    });

    $('#powersaving-on').click(function() {
        thermostat.switchPowerSavingModeOn();
        $('#power-saving-status').text('on');
        updateTemperature();
    });

    $('#powersaving-off').click(function() {
        thermostat.switchPowerSavingModeOff();
        $('#power-saving-status').text('off');
        updateTemperature();
    });

    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      displayWeather(city);
    });

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
    };

    function displayWeather(city) {
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var token = '&appid=6735976ff98b34282364ad84092bd1f2';
      var units = '&units=metric';
      $.get(url + token + units, function(data) {
        $('#outdoor-temperature').text(data.main.temp);
      });
    }
});
