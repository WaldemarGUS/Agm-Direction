import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Map center coordinates
  public lat = 40.7128;  // New York City
  public lng = -74.0060;

  // Direction points
  public origin: string | google.maps.Place | google.maps.LatLng | google.maps.LatLngLiteral = 'Empire State Building, NY';
  public destination: string | google.maps.Place | google.maps.LatLng | google.maps.LatLngLiteral = 'Statue of Liberty, NY';

  // Optional: Add waypoints
  public waypoints: google.maps.DirectionsWaypoint[] = [
    {
      location: 'Times Square, NY',
      stopover: true
    }
  ];

  // Optional: Customize the renderer options
  public renderOptions: google.maps.DirectionsRendererOptions = {
    suppressMarkers: true,
    polylineOptions: {
      strokeColor: '#1976D2',
      strokeWeight: 5
    }
  };

  // Optional: Customize markers
  public markerOptions = {
    origin: {
      draggable: true,
      icon: 'https://img.icons8.com/color/48/000000/marker--v1.png'
    },
    destination: {
      draggable: true,
      icon: 'https://img.icons8.com/color/48/000000/marker--v2.png'
    },
    waypoints: {
      icon: 'https://img.icons8.com/color/48/000000/marker--v3.png'
    }
  };

  // Optional: Handle direction change events
  public directionChange(event: google.maps.DirectionsResult) {
    console.log('Direction changed:', event);
    // You can access route information like:
    const route = event.routes[0];
    console.log('Distance:', route.legs[0].distance.text);
    console.log('Duration:', route.legs[0].duration.text);
  }
}
