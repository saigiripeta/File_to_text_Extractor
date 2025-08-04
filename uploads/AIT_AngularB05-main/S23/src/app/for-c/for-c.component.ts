import { Component } from '@angular/core';

@Component({
  selector: 'app-for-c',
  standalone: true,
  imports: [],
  templateUrl: './for-c.component.html',
  styleUrl: './for-c.component.css'
})
export class ForCComponent {

  users:any = [
  { image: "https://randomuser.me/api/portraits/women/10.jpg", name: "Emily Carter", gender: "Female", city: "New York" },
  { image: "https://randomuser.me/api/portraits/men/11.jpg", name: "Liam Walker", gender: "Male", city: "Los Angeles" },
  { image: "https://randomuser.me/api/portraits/women/12.jpg", name: "Olivia Hall", gender: "Female", city: "Chicago" },
  { image: "https://randomuser.me/api/portraits/men/13.jpg", name: "Noah Wright", gender: "Male", city: "Houston" },
  { image: "https://randomuser.me/api/portraits/women/14.jpg", name: "Ava Young", gender: "Female", city: "Phoenix" },
  { image: "https://randomuser.me/api/portraits/men/15.jpg", name: "Elijah King", gender: "Male", city: "Philadelphia" },
  { image: "https://randomuser.me/api/portraits/women/16.jpg", name: "Sophia Scott", gender: "Female", city: "San Antonio" },
  { image: "https://randomuser.me/api/portraits/men/17.jpg", name: "James Green", gender: "Male", city: "San Diego" },
  { image: "https://randomuser.me/api/portraits/women/18.jpg", name: "Isabella Adams", gender: "Female", city: "Dallas" },
  { image: "https://randomuser.me/api/portraits/men/19.jpg", name: "Benjamin Baker", gender: "Male", city: "San Jose" },

  { image: "https://randomuser.me/api/portraits/women/20.jpg", name: "Mia Gonzalez", gender: "Female", city: "Austin" },
  { image: "https://randomuser.me/api/portraits/men/21.jpg", name: "Lucas Nelson", gender: "Male", city: "Jacksonville" },
  { image: "https://randomuser.me/api/portraits/women/22.jpg", name: "Charlotte Carter", gender: "Female", city: "Fort Worth" },
  { image: "https://randomuser.me/api/portraits/men/23.jpg", name: "Logan Perez", gender: "Male", city: "Columbus" },
  { image: "https://randomuser.me/api/portraits/women/24.jpg", name: "Amelia Roberts", gender: "Female", city: "Charlotte" },
  { image: "https://randomuser.me/api/portraits/men/25.jpg", name: "Mason Turner", gender: "Male", city: "San Francisco" },
  { image: "https://randomuser.me/api/portraits/women/26.jpg", name: "Harper Phillips", gender: "Female", city: "Indianapolis" },
  { image: "https://randomuser.me/api/portraits/men/27.jpg", name: "Ethan Campbell", gender: "Male", city: "Seattle" },
  { image: "https://randomuser.me/api/portraits/women/28.jpg", name: "Evelyn Parker", gender: "Female", city: "Denver" },
  { image: "https://randomuser.me/api/portraits/men/29.jpg", name: "Alexander Evans", gender: "Male", city: "Washington" },

  { image: "https://randomuser.me/api/portraits/women/30.jpg", name: "Abigail Edwards", gender: "Female", city: "Boston" },
  { image: "https://randomuser.me/api/portraits/men/31.jpg", name: "Henry Collins", gender: "Male", city: "El Paso" },
  { image: "https://randomuser.me/api/portraits/women/32.jpg", name: "Emily Stewart", gender: "Female", city: "Nashville" },
  { image: "https://randomuser.me/api/portraits/men/33.jpg", name: "Daniel Morris", gender: "Male", city: "Detroit" },
  { image: "https://randomuser.me/api/portraits/women/34.jpg", name: "Ella Rogers", gender: "Female", city: "Memphis" },
  { image: "https://randomuser.me/api/portraits/men/35.jpg", name: "Sebastian Reed", gender: "Male", city: "Louisville" },
  { image: "https://randomuser.me/api/portraits/women/36.jpg", name: "Scarlett Cook", gender: "Female", city: "Baltimore" },
  { image: "https://randomuser.me/api/portraits/men/37.jpg", name: "Matthew Morgan", gender: "Male", city: "Milwaukee" },
  { image: "https://randomuser.me/api/portraits/women/38.jpg", name: "Grace Bell", gender: "Female", city: "Albuquerque" },
  { image: "https://randomuser.me/api/portraits/men/39.jpg", name: "Jack Murphy", gender: "Male", city: "Tucson" },

  { image: "https://randomuser.me/api/portraits/women/40.jpg", name: "Lily Rivera", gender: "Female", city: "Fresno" },
  { image: "https://randomuser.me/api/portraits/men/41.jpg", name: "Samuel Cooper", gender: "Male", city: "Sacramento" },
  { image: "https://randomuser.me/api/portraits/women/42.jpg", name: "Chloe Richardson", gender: "Female", city: "Mesa" },
  { image: "https://randomuser.me/api/portraits/men/43.jpg", name: "Owen Cox", gender: "Male", city: "Atlanta" },
  { image: "https://randomuser.me/api/portraits/women/44.jpg", name: "Aria Howard", gender: "Female", city: "Kansas City" },
  { image: "https://randomuser.me/api/portraits/men/45.jpg", name: "Jacob Ward", gender: "Male", city: "Colorado Springs" },
  { image: "https://randomuser.me/api/portraits/women/46.jpg", name: "Layla Torres", gender: "Female", city: "Omaha" },
  { image: "https://randomuser.me/api/portraits/men/47.jpg", name: "Nathan Peterson", gender: "Male", city: "Raleigh" },
  { image: "https://randomuser.me/api/portraits/women/48.jpg", name: "Zoey Gray", gender: "Female", city: "Miami" },
  { image: "https://randomuser.me/api/portraits/men/49.jpg", name: "Aiden Ramirez", gender: "Male", city: "Oakland" },

  { image: "https://randomuser.me/api/portraits/women/50.jpg", name: "Nora James", gender: "Female", city: "Minneapolis" },
  { image: "https://randomuser.me/api/portraits/men/51.jpg", name: "Caleb Watson", gender: "Male", city: "Tulsa" },
  { image: "https://randomuser.me/api/portraits/women/52.jpg", name: "Ellie Brooks", gender: "Female", city: "Arlington" },
  { image: "https://randomuser.me/api/portraits/men/53.jpg", name: "Ryan Hughes", gender: "Male", city: "New Orleans" },
  { image: "https://randomuser.me/api/portraits/women/54.jpg", name: "Hazel Bryant", gender: "Female", city: "Wichita" },
  { image: "https://randomuser.me/api/portraits/men/55.jpg", name: "Grayson Russell", gender: "Male", city: "Cleveland" },
  { image: "https://randomuser.me/api/portraits/women/56.jpg", name: "Violet Griffin", gender: "Female", city: "Tampa" },
  { image: "https://randomuser.me/api/portraits/men/57.jpg", name: "Anthony Diaz", gender: "Male", city: "Bakersfield" },
  { image: "https://randomuser.me/api/portraits/women/58.jpg", name: "Penelope Hayes", gender: "Female", city: "Aurora" },
  { image: "https://randomuser.me/api/portraits/men/59.jpg", name: "Julian Myers", gender: "Male", city: "Anaheim" }
];

}
