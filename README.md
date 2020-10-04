### Task plan

added packages: 

    angular material,

    ngrx store, devtools

    ngrx schematics
    


ROUTE:
- APP component include header and router-link
- Dashboard component include all orders (tables), and from it can navigate per order
- Order component will hold reactive form and submit an order, the order component will include all menu item, each family item (e.g breakfast) will be its own repeated component (based angular material list)


## todo
github integration - done

app component with:

header sub component

router outlet

Order (lazy loaded) (will include sub menu item component)

Dashboard component (by route, here is the app start point and will include table sub dummy component with dd)

Toast (material according to spec)

integrate store

 

## logic 


[ ] submit order and add to store, change state accordantly.

[ ] on dashboard load - will check store and update inner state.

[ ] need to add ROUTE for individual item so it can be edit from dashboard component.


