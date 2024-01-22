import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationsService {

  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, timeOut: number) {
    this.toastr.success(message,'',{
      timeOut: timeOut,
    });
  }

  showError(message: string, timeOut: number) {
    this.toastr.error(message, '' ,{
      timeOut: timeOut,
    });
  }

  showWarning(message: string, timeOut: number) {
    this.toastr.warning(message, '', {
      timeOut: timeOut,
    });
  }
  
}
