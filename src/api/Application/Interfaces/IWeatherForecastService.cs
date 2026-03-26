using api.Application.DTOs;
using api.Domain.Entities;

namespace api.Application.Interfaces;

public interface IWeatherForecastService
{
    IEnumerable<WeatherForecastDto> GetWeatherForecasts();
}