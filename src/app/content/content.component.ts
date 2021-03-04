import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoComponent } from '../video/video.component';

interface ITestimonial {
  author: string,
  job: string,
  review: string,
  icon: string
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public Testimonails: Array<ITestimonial> = [
    {
      author: "JANE GALADRILER",
      job: "CEO TENGKUPER",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum error impedit, obcaecati in eveniet porro eius? Animi, recusandae distinctio. Saepe voluptatum, eius provident mollitia molestiae rerum veritatis, deleniti quae cumque sequi aut labore doloremque ratione debitis animi recusandae odio praesentium sapiente ullam exercitationem quisquam porro libero, aperiam eveniet. Nemo corporis possimus quaerat suscipit libero?",
      icon: "../../assets/images/authors/jane.png"
    },
    {
      author: "LOREM IPSUM",
      job: "ENGINEER",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nostrum rerum harum debitis libero iure voluptatem laborum vero cum exercitationem consequuntur id voluptatibus quasi itaque suscipit accusantium non inventore minima consectetur asperiores alias nihil! Totam doloribus harum dignissimos facilis, minus sequi odit nihil perspiciatis nam exercitationem delectus deleniti dolorem explicabo id quo mollitia rem doloremque optio quisquam tempore cupiditate maiores. Non minima eos in dolore vitae cumque impedit doloribus. Quos?",
      icon: "../../assets/images/authors/lorem.png",
    },
    {
      author: "IPSUM LOREM",
      job: "DRIECTOR",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nobis illo atque aspernatur, obcaecati dignissimos harum. Doloribus maiores debitis, delectus molestiae aliquam similique, vitae at repellat quas et omnis cupiditate ipsum, placeat assumenda exercitationem explicabo reprehenderit deleniti optio. Repudiandae non deserunt ea minus vitae voluptates doloribus at! Blanditiis, est facere? Alias, soluta velit ea iure incidunt animi ducimus dicta nesciunt reprehenderit! Voluptatem, impedit amet.",
      icon: "../../assets/images/authors/ipsum.png", 
    },
    {
      author: "FAREN IPSUM",
      job: "FRONTEND ENGINER",
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quam voluptas sapiente harum ratione eligendi, quas provident pariatur optio non! Modi doloremque perferendis architecto, quod voluptates animi, dignissimos corporis autem placeat suscipit iste magni repudiandae officia culpa, quo quidem. Accusamus, dicta aspernatur quia sint possimus illo voluptate ab tenetur maxime? Dolorum, recusandae delectus? Doloremque praesentium, assumenda beatae corrupti iste deleniti, voluptatem fuga, veniam est tempora maxime non dignissimos? ",
      icon: "../../assets/images/authors/faren.png", 
    },
    {
      author: "LORD IPSUM",
      job: "AUTHOR",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error facilis corporis in nulla quis quisquam, cum sapiente, voluptatibus amet ipsum temporibus. Debitis vero perferendis a optio deleniti tempora consequuntur earum veniam numquam in dignissimos, totam quas quia nesciunt aut eveniet esse quo ea aliquam iusto minus suscipit perspiciatis architecto illo. Ea fugiat, quam quaerat necessitatibus voluptatem numquam expedita tenetur reiciendis modi earum quibusdam distinctio maiores, quas id beatae a facere consectetur repudiandae nesciunt sapiente! Quasi nemo a maiores molestias temporibus laudantium perferendis quos officia!",
      icon: "../../assets/images/authors/lord.png"
    }
  ]

  public active: number = 0

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showVideo(): void {
    this.dialog.open(VideoComponent, {
      panelClass: 'embed-responsive'
    })
  }

  setActive(el: number): void {
    this.active = el
  }
}
