# Generated by Django 3.2.23 on 2024-01-17 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('venders', '0005_alter_productcategory_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productcategory',
            name='category',
            field=models.CharField(max_length=30, unique=True),
        ),
    ]