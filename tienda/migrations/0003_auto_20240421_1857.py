# Generated by Django 3.1 on 2024-04-21 23:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0002_rename_product_producto'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(null=True, upload_to='products'),
        ),
        migrations.AlterField(
            model_name='categoria',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='producto',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]