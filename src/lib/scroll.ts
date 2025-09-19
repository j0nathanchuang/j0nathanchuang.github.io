/**
 * Smooth scroll utility functions
 */

export interface ScrollOptions {
    behavior?: ScrollBehavior;
    offset?: number;
}

/**
 * Smoothly scroll to an element by ID
 */
export function scrollToElement(
    elementId: string,
    options: ScrollOptions = {}
): void {
    const element = document.getElementById(elementId);
    if (!element) {
        console.warn(`Element with id "${elementId}" not found`);
        return;
    }

    const {
        behavior = 'smooth',
        offset = 0,
    } = options;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior,
    });
}

