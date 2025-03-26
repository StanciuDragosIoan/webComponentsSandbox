/*
https://dev.to/aaravjoshi/shadow-dom-master-web-component-encapsulation-for-modern-javascript-apps-4171?context=digest


Shadow DOM creates a separate DOM tree attached to an element, isolated from the main document DOM. 
This encapsulation prevents style leaks and naming collisions that often plague component-based architectures.

The core principle behind Shadow DOM is simple: it provides boundary protection between component internals and the rest of the page. 
This separation makes components more reliable and maintainable in complex applications.


Style encapsulation

Style encapsulation is perhaps the most practical benefit of Shadow DOM. Styles defined inside 
the shadow root only apply to elements within it, and external styles don't leak in.

When building component libraries, I rely on this feature to ensure consistent rendering regardless 
of the styling environment where my components are used.

Working with CSS Custom Properties

To maintain encapsulation while allowing customization, CSS custom properties (variables) are essential. 
They can cross the shadow boundary, enabling theming without breaking encapsulation.

Event Handling and Retargeting

Events crossing the shadow boundary undergo retargeting, which adjusts the event target to respect encapsulation. 
This nuance is crucial for building interactive components with proper event delegation.

//slot management for content distribution

Slots enable components to accept and render external content, creating a clear composition pattern. 
With named slots, components can define multiple insertion points for structured content distribution.

//Working with Slotted Content

Accessing and styling slotted content requires special techniques. 
The ::slotted() selector allows you to style elements that have been slotted into your component.

Template Stamping for Performance

Using HTML templates with Shadow DOM optimizes performance since the template content only needs to be 
parsed once, then cloned for each instance.

Part Mapping for Styling Hook Exposure

The part system allows exposing specific internal elements for external styling without breaking encapsulation. 
This creates a controlled styling API for your components.

Advanced Composition with Shadow DOM

Creating complex components often involves combining multiple custom elements, each with their own shadow DOM. 
This compositional approach helps maintain separation of concerns.
 
 
 



*/