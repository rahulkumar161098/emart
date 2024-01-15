# Generated by Django 3.2.23 on 2024-01-09 10:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(choices=[('---', '----------'), ('PHONE', 'PHONE'), ('LAPTOP', 'LAPTOP')], default='un_category', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='ListProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=40)),
                ('description', models.TextField()),
                ('selling_price', models.IntegerField()),
                ('market_price', models.IntegerField()),
                ('available', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('product_unit', models.IntegerField()),
                ('category', models.CharField(choices=[('---', '----------'), ('PHONE', 'PHONE'), ('LAPTOP', 'LAPTOP')], default='un_category', max_length=30)),
                ('email', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='accounts.shopdetails', to_field='email')),
            ],
        ),
    ]
