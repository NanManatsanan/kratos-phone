import { Routes, RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { HistoryComponent } from './components/history/history.component';
import { AllhistoryComponent } from './components/allhistory/allhistory.component';
import { InformationComponent } from './components/information/information.component';
import { OrderitemComponent } from './components/orderitem/orderitem.component';


const RouteLists: Routes = [
    { path: '', redirectTo: AuthURL.History, pathMatch: 'full'},
    { path: AuthURL.History, component: HistoryComponent},
    { path: AuthURL.Allhistory, component: AllhistoryComponent},
    {
         path: AuthURL.Information,
         children:[
             {path: '', component:InformationComponent},
             {path:':From',component:InformationComponent}
         ]
    },
    { path: AuthURL.Orderitem, component: OrderitemComponent}
];

export const AuthenticationRouting = RouterModule.forChild(RouteLists);