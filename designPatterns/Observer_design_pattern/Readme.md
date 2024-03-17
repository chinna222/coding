# Observer design pattern

    Observer design pattern also known as pub/sub pattern. By name it says that a subscriber can subscribe to publisher and publisher will notify the subscriber if anything is published

    A good example can be adding an event lister on click event or mouse hover.

The Observer pattern is a design pattern where an object, known as the subject, maintains a list of its dependents, called observers, and notifies them of any state changes, usually by calling one of their methods. This pattern is particularly useful for implementing distributed event handling systems, where one object needs to notify other objects without making assumptions regarding those objects. Using the Observer pattern makes your application more modular and easier to maintain and extend.

## Applying Observer Pattern to a Click Event

Let's illustrate how the Observer pattern works in the context of a click event and a function that is invoked in response to that event:

## Publisher (Event Target):

    In this scenario, the subject is the DOM element that the click event is attached to. This could be a button, a link, or any other clickable element. The subject maintains a list of observers (event listeners) that are interested in being notified when a specific event (like a click) occurs.

## Observers (Event Listeners):

    The observers are the functions (or event handlers) that want to be notified when the click event occurs on the subject. These observers have registered (subscribed) themselves to the subject for a specific event type. In JavaScript, this is typically done using methods like addEventListener.

## Registration (Subscribe):

    When you attach a function to a click event of a DOM element using addEventListener, you are essentially registering that function as an observer of the subject. The subject (DOM element) now has a reference to the observer (function) and knows to notify it when a click event occurs.

## Notification (Publish):

    Once the click event happens on the DOM element, the subject iterates over its list of registered observers for that event type and notifies them by calling their functions. This is the "publish" step where the subject (publisher) informs the observers (subscribers) of the event.

## Event Object:

    When notifying the observers, the subject often passes along an event object that contains details about the event, such as the type of event, the target element, and other relevant data. This allows observers to react appropriately based on the specifics of the event.
