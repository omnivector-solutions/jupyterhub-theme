import setuptools

setup_args = dict(
    name="omnivector-theme",
    version="0.1.0",
    url="https://github.com/omnivector-solutions/jupyterhub-theme",
    author="Omnivector",
    description="Omnivector theme for jupyterlab",
    long_description_content_type="text/markdown",
    packages=setuptools.find_packages(),
    zip_safe=False,
    include_package_data=True,
    python_requires=">=3.6",
    license="BSD-3-Clause",
    platforms="Linux, Mac OS X, Windows",
    keywords=["Jupyter", "JupyterLab"],
    classifiers=[
        "License :: OSI Approved :: BSD License",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Framework :: Jupyter",
    ],
)

setuptools.setup(**setup_args)
