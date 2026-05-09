import {Component, inject} from '@angular/core';
import {Router, NavigationEnd, RouterLink} from '@angular/router';
import {filter, map, startWith} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  private readonly router = inject(Router);

  readonly showFooter = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.shouldShowFooter()),
      startWith(this.shouldShowFooter()),
    ),
    { initialValue: this.shouldShowFooter() },
  );

  private shouldShowFooter(): boolean {
    const path = this.router.url.split(/[?#]/)[0];
    return !(path.endsWith('/products/chamatkar') || path.endsWith('/products/p3'));
  }
}
