from django.apps import AppConfig


class ShookConfig(AppConfig):
    name = 'shook'

    def ready(self):
        from . import signals
