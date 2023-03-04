(define (over-or-under num1 num2)
  'YOUR-CODE-HERE
  (if (< num1 num2) -1 (if (= num1 num2) 0 1))
)

;;; Tests
(over-or-under 1 2)
; expect -1
(over-or-under 2 1)
; expect 1
(over-or-under 1 1)
; expect 0

;;; Q3
(define (filter-lst fn lst)
  'YOUR-CODE-HERE
  (if (null? lst)
       nil
       (if (fn (car lst))
          (cons (car lst) (filter-lst fn (cdr lst)))
          (filter-lst fn (cdr lst))
        )
  )
  
)

;;; Tests
(define (even? x)
  (= (modulo x 2) 0))
(filter-lst even? '(0 1 1 2 3 5 8))
; expect (0 2 8)


;;; Q4
(define (make-adder num)
  'YOUR-CODE-HERE
  (lambda (x) (+ x num))
)

;;; Tests
(define adder (make-adder 5))
(adder 8)
; expect 13


;;; Q5
(define lst
  ;((1) 2 (3 4) 5)
  (cons '(1) (cons 2 (cons '(3 4) (cons 5 nil))))
)


;;; Q6
(define (composed f g)
  ;YOUR-CODE-HERE
  (lambda (x) (f (g x)))
)


;;; 07
(define (remove item lst)
  ;YOUR-CODE-HERE
  (filter-lst (lambda (x) (not (= x item))) lst)
)


;;; Tests
(remove 3 nil)
; expect ()
(remove 3 '(1 3 5))
; expect (1 5)
(remove 5 '(5 3 5 5 1 4 5 4))
; expect (3 1 4 4)


;;; 08
(define (no-repeats s)
  ;YOUR-CODE-HERE
  (if (null? s) 
      nil
      (cons (car s) (no-repeats (remove (car s) (cdr s))))
  )
  ;(filter-lst (lambda (x) (not (= x item))) s)
)


;;; 09
(define (substitute s old new)
  'YOUR-CODE-HERE
  (if (null? s) nil
      (if (eq? old (car s))
          (cons new (substitute (cdr s) old new))
          (if (pair? (car s)) ; if is (cons)
              (cons (substitute (car s) old new) (substitute (cdr s) old new))
              (cons (car s) (substitute (cdr s) old new))
          )
      )
  )
)

;;; Tests
(substitute '((o) o (o)) 'o 'r)
; expect ((r) r (r))


;;; 10
(define (sub-all s olds news)
  'YOUR-CODE-HERE
  (if (null? olds)
      s
      (sub-all (substitute s (car olds) (car news)) (cdr olds) (cdr news))
  )
)

;;; Test
(sub-all '(go ((bears))) '(go bears) '(big game))
; expect (big ((game)))