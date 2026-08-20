import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core'

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  private io: IntersectionObserver | null = null

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.classList.add('reveal')
    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            this.io?.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    this.io.observe(this.el.nativeElement)
  }

  ngOnDestroy() {
    this.io?.disconnect()
  }
}