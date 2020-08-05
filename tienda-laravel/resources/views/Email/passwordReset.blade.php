@component('mail::message')
# Solicitud de cambio de contraseña

Haz Click en el botón de abajo para restrablecer tu contraseña.

@component('mail::button', ['url' => 'http://localhost:4200/response-password-reset?token='.$token])
Cambiar Clave
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
