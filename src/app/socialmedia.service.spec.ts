import { TestBed } from '@angular/core/testing';
import { SocialMediaService } from './socialmedia.service';

describe('SocialMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialMediaService = TestBed.get(SocialMediaService);
    expect(service).toBeTruthy();
  });
});
