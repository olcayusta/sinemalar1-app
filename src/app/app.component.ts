import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sinemalar1-app';

  links = ['Ana Sayfa', 'Vizyondaki Filmler', 'Yakında'];
  activeLink = this.links[0];

  visionItems = [
    {img: 'https://img01.imgsinemalar.com/images/afis_dev/t/the-lodge-1582527821.jpg', title: 'Mürit'},
    {img: 'https://img01.imgsinemalar.com/images/afis_dev/t/the-painted-bird-1489304616.jpg', title: 'Boyalı Kuş'},
    {img: 'https://img01.imgsinemalar.com/images/afis_dev/p/portal-1573814250.jpg', title: 'Geçit'},
    {img: 'https://img01.imgsinemalar.com/images/afis_dev/k/kahramanlar-1597150317.jpg', title: 'Kahramanlar'},
    {img: 'https://img01.imgsinemalar.com/images/afis_dev/t/the-lost-lion-kingdom-1557874558.jpg', title: 'Aslan Krallığı'},
    {img: 'https://img01.imgsinemalar.com/images/afis_dev/4/47-meters-down-the-next-chapter-1556192992.jpg', title: '47 Meters Down: Uncaged'},
  ]

}
