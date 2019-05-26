import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-recommend-instruments',
  templateUrl: './recommend-instruments.component.html',
  styleUrls: ['./recommend-instruments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendInstrumentsComponent implements OnInit {

  mainForm: FormGroup;
  focusListForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.mainForm = this.fb.group({
      listName: [''],
      recommendations: this.fb.array([this.createRecommendationForm()])
    });

    this.focusListForm = this.fb.group({
      list: this.fb.array([]),
    })

    const list = [
      {
        listName: "List1",
        recommendations: [{
          name: 'Name 1',
          displayName: 'Display 1'
        }]
      },
      {
        listName: "List2",
        recommendations: [{
          name: 'Name 2',
          displayName: 'Display 2'
        }]
      },
      {
        listName: "List3",
        recommendations: [{
          name: 'Name 3',
          displayName: 'Display 3'
        }]
      },
      {
        listName: "List4",
        recommendations: [{
          name: 'Name 4',
          displayName: 'Display 4'
        }]
      },
      {
        listName: "List5",
        recommendations: [{
          name: 'Name 5',
          displayName: 'Display 5'
        }]
      }
    ]

    list.forEach(parentElement => {

      const mainForm = this.createMainForm();

      mainForm.patchValue(parentElement);

      parentElement.recommendations.forEach((childElement) => {
        const form = this.createRecommendationForm();
        form.patchValue(childElement);
        (<FormArray>mainForm.get("recommendations")).push(form);
      });

      (<FormArray>this.focusListForm.get("list")).push(mainForm);

    });

  }

  createMainForm(): FormGroup {
    return this.fb.group({
      listName: [''],
      recommendations: this.fb.array([this.createRecommendationForm()])
    })
  }

  onClick() {
    console.log(this.mainForm);
  }

  createRecommendationForm(): FormGroup {
    return this.fb.group({
      name: [''],
      displayName: ['']
    });
  }

}
