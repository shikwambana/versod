//__IMPORT_MODULES_HERE__
//__LIBRARY__@ckeditor/ckeditor5\-angular
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
//__END__LIBRARY__@ckeditor/ckeditor5\-angular
import {NgModule } from '@angular/core';
import { sdProviders} from './sd-providers';
import { environment } from 'environments/environment';
@NgModule({
  imports: [
    //__CUSTOM_IMPORTS_MODULES__
    //__CUSTOM_IMPORTS_MODULES_END__
    //__IMPORTS_MODULES__
    
//__IMPORTED_MODULE__CKEditorModule
CKEditorModule,
//__IMPORTED_MODULE__CKEditorModule__END
//__IMPORTS_MODULES_END__
  ],
  providers: [...sdProviders],
  exports: [
    //__EXPORTS_MODULES__
    
//__EXPORTED_MODULE__CKEditorModule
CKEditorModule,
//__EXPORTED_MODULE__CKEditorModule__END
//__EXPORTS_MODULES_END__
  ]
})
export class DependenciesModule { }