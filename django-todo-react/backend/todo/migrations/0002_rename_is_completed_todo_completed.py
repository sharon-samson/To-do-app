# Generated by Django 3.2.8 on 2021-10-11 10:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='is_completed',
            new_name='completed',
        ),
    ]
