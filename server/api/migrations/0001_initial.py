# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-04-09 00:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ExampleModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=45)),
                ('img', models.ImageField(blank=True, upload_to='')),
            ],
        ),
    ]
