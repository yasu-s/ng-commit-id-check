import { Component, OnInit } from '@angular/core';

import { VersionService } from './version.service';

const KEY_COMMIT_ID = 'commitId';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  savedCommitId = '';
  currentCommitId = '';

  constructor(private versionService: VersionService) {}

  ngOnInit(): void {
    const id = localStorage.getItem(KEY_COMMIT_ID);
    if (id) {
      this.savedCommitId = id;
    }
  }

  checkCommitId(): void {
    this.versionService.getCommitId().subscribe(id => {
      this.currentCommitId = id;
    });
  }

  saveCommitId(): void {
    if (this.currentCommitId) {
      localStorage.setItem(KEY_COMMIT_ID, this.currentCommitId);
      this.savedCommitId = this.currentCommitId;
    }
  }
}
