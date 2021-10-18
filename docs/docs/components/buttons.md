---
id: buttons
title: Buttons
---

import { ButtonComponent } from "./buttons.js"

<p>Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>

## Examples

### Types
<p>Use any of the available button style types to quickly create a styled button. Just modify the <code>btnStyle</code> prop.</p>
<ButtonComponent type="type" buttons={['Primary', 'Success', 'Danger', 'Warning', 'Simple', 'Link']}></ButtonComponent>

### Sizes
<p>Larger or smaller buttons? Add <code>size</code> for additional sizes.</p>
<ButtonComponent type="size" buttons={['Large', 'Medium', 'Small']}></ButtonComponent>


## Disabled state
<p>Make buttons look inactive by adding the <code>disabled</code> prop to.</p>
<ButtonComponent type="activity"></ButtonComponent>

## Uppercase
<p>Make button text uppercase by adding the <code>uppercase</code> prop to.</p>
<ButtonComponent type="uppercase"></ButtonComponent>

## Block
<p>Make button full-width by adding the <code>block</code> prop to.</p>
<ButtonComponent type="block"></ButtonComponent>

## Icon
<p>Add your favorite icon by using the <code>icon</code> prop.</p>
<ButtonComponent type="icon" buttons={['Primary', 'Success', 'Danger', 'Warning', 'Simple', 'Link']} icons={['envelope-alt', 'check-circle', 'times-circle', 'exclamation-triangle', 'info-circle', 'link']}></ButtonComponent>

## API

### Button
<ButtonComponent type="APIbutton" table={[
    ['href', 'string', '', 'Href description'], 
    ['type', 'string', 'button', 'type description'], 
    ['btnStyle', 'primary | success | danger | warning | simple | link', 'default', 'btnStyle description'], 
    ['size', 'large | medium | small', 'medium', 'size description'], 
    ['disabled', 'boolean', '', 'disabled description'], 
    ['block', '', 'medium', 'size description']
]}></ButtonComponent>

<!-- ## API

### Button

<p>import Button from "erxes-ui/lib/components/Button";</p>
<ApiButton></ApiButton> --> --> --> -->